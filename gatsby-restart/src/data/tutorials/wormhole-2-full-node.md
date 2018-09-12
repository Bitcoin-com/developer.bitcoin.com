---
title: Wormhole Pt 2. Full Node
author: Gabriel Cardona
publishedAt: 2000-01-01
updatedAt: 2018-07-02
---

### Intro

Welcome to part 2 of our multi-part series where we get you everything you need to quickly launch tokens and ICOs on Bitcoin Cash. In [Part 1 Setup](./wormhole-1-setup.html) we got your development environment set up and downloaded the Wormhole SDK.

Wormhole requires you to run your own full node. So in this part we'll set up a full node, fire up and wrap `wormholed` in [wormholeREST](https://github.com/Bitcoin-com/wormholerest.bitcoin.com) and finally confirm Wormhole SDK is properly configured.

### Getting Started

#### Spin up configure your machine

First we're going to need an instance of Ubuntu Linux to host our blockchain on. Head on over to [Digital Ocean](https://www.digitalocean.com) to spin up a droplet. Once you create an account make sure to upload your public ssh key so you can easily ssh in to the newly created machine. Choose the default Ubuntu 16.04.5 x64.

![](../img/tutorials/do-new-1.png)

For this tutorial we're running a 2CPU machine w/ 4GB of RAM.

![](../img/tutorials/do-new-2.png)

The blockchain is big so we're going to need 200 GB of block storage.

![](../img/tutorials/do-new-3.png)

Choose a data center near you.

![](../img/tutorials/do-new-4.png)

Name your Ubuntu instance. We'll call ours "wormhole-demo-testnet"

![](../img/tutorials/do-new-5.png)

Once your Ubuntu instance is ready you'll get an IP address. Here ours is 138.197.213.195.

![](../img/tutorials/do-new-6.png)

You can now `ssh` in to your newly created machine. In the next step we'll begin to configure our new Ubuntu instance.

![](../img/tutorials/do-new-7.png)

---

#### Configure your machine

It's worth noting that a tool such as Docker could greatly simplify the following steps but we're doing this the manual way for demonstration purposes. First lets update the machine and install basic dependencies.

First `update` to get the most update to date packages of the versions already installed on the machine.

    apt-get update --yes

Next `upgrade` to get the latest and greatest versions.

    apt-get upgrade --yes

Install all the dependencies needed to build `wormholed`.

    sudo apt-get install build-essential libtool autotools-dev automake pkg-config libssl-dev libevent-dev bsdmainutils libminiupnpc-dev libzmq3-dev libboost-all-dev libdb++-dev libboost-system-dev libboost-filesystem-dev libboost-chrono-dev libboost-program-options-dev libboost-test-dev libboost-thread-dev --yes

#### Create a user

We're going to create a user and give them the ability to `ssh` back in to the machine. This way we don't have to use our `root` user.

    adduser wormhole

You'll be asked to enter a password for your new `wormhole` user. Make sure to keep that password safe .

Add the `wormhole` user to the `sudo` group

    usermod -aG sudo wormhole

Change to the `wormhole` user

    su - wormhole

Create a `.ssh` directory in the `wormhole` user's home directory.

    mkdir ~/.ssh

Update the permissions of the directory.

    chmod 700 ~/.ssh

Edit the `authorized_keys` file and paste in public ssh key of your local machine and save. This is the same ssh public key that you uploaded to Digital Ocean.

    vim ~/.ssh/authorized_keys

Change the permissions of the `authorized_keys` file.

    chmod 600 ~/.ssh/authorized_keys

Exit from the `wormhole` user.

    exit

Exit from the `root` user

    exit

`ssh` back in as the newly created `wormhole` user.

    ssh wormhole@ip-address

---

#### Format volume for blockchain storage

Go to your Digital Ocean account and get the name of your 200 GB volume. In our case it's `volume-sfo2-28`.

![](../img/tutorials/do-new-8.png)

Replace `volume-name` in each of the following commands w/ your volume name from the previous step. Run each of these commands one at a time.

    sudo parted /dev/disk/by-id/scsi-0DO_Volume_volume-name mklabel gpt
    sudo parted -a opt /dev/disk/by-id/scsi-0DO_Volume_volume-name mkpart primary ext4 0% 100%
    sudo mkfs.ext4 /dev/disk/by-id/scsi-0DO_Volume_volume-name-part1
    sudo mkdir -p /mnt/volume-name-part1
    echo '/dev/disk/by-id/scsi-0DO_Volume_volume-name-part1 /mnt/volume-name-part1 ext4 defaults,nofail,discard 0 2' | sudo tee -a /etc/fstab
    sudo mount -a
    sudo chmod 777 /mnt/volume-name-part1

Next create a directory for the block storage. Make sure to replace `volume-name` w/ your volume name from digital ocean.

    mkdir /mnt/volume-name-part1/Bitcoin

Also create a directory for the bitcoin configuration.

    mkdir ~/.bitcoin

Now create and edit a `bitcoin.conf` file.

    vim ~/.bitcoin/bitcoin.conf

Add the following. Make sure to replace `volume-name` w/ your volume name from digital ocean. Make note of the `rpcuser` and `rpcpassword` for when you need them again in the last step.

    # Specify a non-default location to store blockchain and other data.
    datadir=/mnt/volume-name-part1/Bitcoin
    # Set database cache size in megabytes; machines sync faster with a larger cache. Recommend setting as high as possible based upon machine's available RAM.
    dbcache=1000
    # Maintain a full transaction index, used by the getrawtransaction rpc call.
    txindex=1

    # load testnet
    testnet=1

    # Accept command line and JSON-RPC commands.
    server=1
    # Username for JSON-RPC connections
    rpcuser=l33t
    # Password for JSON-RPC connections
    rpcpassword=h4x0r
    rpcallowip=0.0.0.0/0

---

#### Clone and configure the Wormhole codebase

The Wormhole codebase is a fork Bitcoin ABC. You need to first clone the git repo.

    git clone https://github.com/copernet/wormhole.git

Now `cd` in to the directory.

    cd wormhole/

Because of a bug in the Wormhole code base before building it you need to first `cd` in to the `share/` directory and run a command.

    cd share
    ./genbuild.sh ../src/obj/build.h
    cd ..

Now you're ready to build `wormholed`

    ./autogen.sh
    ./configure
    make
    sudo make install

This will take several minutes. Once it's done you will have a couple new files in the `src/` directory—`wormholed` and `wormholed-cli` which replace `bitcoind` and `bitcoin-cli`.

---

#### Start Wormhole

You're ready to start `wormholed`

    ./src/wormholed
    2018-08-11 16:03:27 Initializing Omni Core v0.0.6 [test]
    2018-08-11 16:03:27 Loading trades database: OK
    2018-08-11 16:03:27 Loading send-to-owners database: OK
    2018-08-11 16:03:27 Loading tx meta-info database: OK
    2018-08-11 16:03:27 Loading smart property database: OK
    2018-08-11 16:03:27 Loading master transactions database: OK
    2018-08-11 16:03:27 Loading fee cache database: OK
    2018-08-11 16:03:27 Loading fee history database: OK
    2018-08-11 16:03:27 Loading persistent state: NONE (no usable previous state found)
    2018-08-11 16:03:27 Exodus balance: 0 OMNI
    2018-08-11 16:03:27 Omni Core initialization completed

You can confirm it worked by opening a new tab on your remote machine and running a command to `wormholed-cli`.

    ./src/wormholed-cli whc_getinfo
    {
      "wormholeversion_int": 6000,
      "wormholeversion": "0.0.6",
      "bitcoincoreversion": "0.17.2",
      "block": 47104,
      "blocktime": 1357564931,
      "blocktransactions": 0,
      "totaltrades": 0,
      "totaltransactions": 0,
      "alerts": [
      ]
    }

---

#### Test wormholeREST

We're almost ready to create a token. The one remaining step is to confirm [wormholeREST](https://github.com/Bitcoin-com/wormholerest.bitcoin.com) can talk to `wormholed`. Back on your desktop/laptop, not the digital ocean machine, clone the repo, `cd` in to it and install the dependencies.

    git clone git@github.com:Bitcoin-com/wormholerest.bitcoin.com.git
    cd wormholerest.bitcoin.com
    npm install

Now start it w/ the following environment variables. The IP addresss is your digital ocean machine and the username/password are what you set in the `bitcoin.conf` file.

    RPC_BASEURL=http://your-ip-address:18332/ RPC_PASSWORD=h4x0r RPC_USERNAME=l33t NETWORK=testnet npm run dev

Open a browser to `http://localhost:3000` and you'll see wormholeREST. This is 100% of the `wormholed` RPC but over HTTP so it's much easier to deal with.

![](../img/tutorials/do-new-9.png)

To confirm everything is working scroll down and try the `dataRetrieval/info` endpoint.

![](../img/tutorials/do-new-10.png)

You should get back a response similar to the following. Note the `block` coount is 278975. That's because the chain just started to sync. At the time of writing the blockchain height is 542982. It will take several hours to sync the entire blockchain before you can create your first token.

    {
      "wormholeversion_int": 6000,
      "wormholeversion": "0.0.6",
      "bitcoincoreversion": "0.17.2",
      "block": 278975,
      "blocktime": 1409912858,
      "blocktransactions": 0,
      "totaltrades": 0,
      "totaltransactions": 0,
      "alerts": []
    }

---

### Summary

Great work! You spun up an ubuntu instance on digital ocean, configured it and added a user, cloned the Wormhole repo and built it. To finish you cloned wormholeREST and confirmed it can properly talk to `wormholed`.

The next step is to let the blockchain sync. In our next post we'll create our first tokens.
