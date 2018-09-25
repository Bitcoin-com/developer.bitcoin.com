// @flow
import * as React from 'react'

// https://react-icons.netlify.com/#/

import {
  FaAngleRight,
  FaArrowsAltV,
  FaBtc,
  FaBuromobelexperte,
  FaCheck,
  FaCode,
  FaCodeBranch,
  FaCogs,
  FaCube,
  FaCubes,
  FaDatabase,
  FaDollarSign,
  FaEllipsisH,
  FaExchangeAlt,
  FaFile,
  FaGamepad,
  FaHdd,
  FaHome,
  FaKey,
  FaLink,
  FaPlug,
  FaPlus,
  FaQrcode,
  FaTerminal,
  FaWallet,
} from 'react-icons/fa'

// Whitelist of valid icons
export const getIcon = (icon: string): React.Node => {
  switch (icon) {
    case 'elipses':
      return <FaEllipsisH />
    case 'plus':
      return <FaPlus />
    case 'home':
      return <FaHome />
    case 'terminal':
      return <FaTerminal />
    case 'file':
      return <FaFile />
    case 'wallet':
      return <FaWallet />
    case 'qrcode':
      return <FaQrcode />
    case 'bitcoin':
      return <FaBtc />
    case 'check':
      return <FaCheck />
    case 'cube':
      return <FaCube />
    case 'cubes':
      return <FaCubes />
    case 'gamepad':
      return <FaGamepad />
    case 'link':
      return <FaLink />
    case 'key':
      return <FaKey />
    case 'buromobelexperte':
      return <FaBuromobelexperte />
    case 'code-branch':
      return <FaCodeBranch />
    case 'hdd':
      return <FaHdd />
    case 'dollar-sign':
      return <FaDollarSign />
    case 'exchange':
      return <FaExchangeAlt />
    case 'code':
      return <FaCode />
    case 'plug':
      return <FaPlug />
    case 'arrows-vertical':
      return <FaArrowsAltV />
    case 'cogs':
      return <FaCogs />
    case 'database':
      return <FaDatabase />
    default:
      return <FaAngleRight />
  }
}
