// @flow

import * as React from 'react'
import styled from 'styled-components'
import { graphql, push } from 'gatsby'

import DefaultLayout from 'components/layouts/DefaultLayout'
import Hero from 'components/Hero'
import Container from 'components/Container'
import HelmetPlus from 'components/HelmetPlus'
import StyledLink from 'atoms/StyledLink'

import InfoCard from 'components/InfoCard'

import H3 from 'atoms/H3'
import H2 from 'atoms/H2'

import H1 from 'atoms/H1'
import Text from 'atoms/Text'

import media from 'styles/media'
import spacing from 'styles/spacing'
import { getTitleDisplay } from 'utils/formatting'
import { getIcon } from 'utils/icon-helpers'

/* import categories from 'data/showcaseCategories'
 */
const HeroLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
`

const SectionLayout = styled.div`
  display: grid;
  padding-top: ${spacing.medium};
  grid-gap: ${spacing.medium};
  grid-template-columns: 1fr;
  ${media.medium`
    grid-template-columns: repeat(auto-fit, minmax(400px, .5fr));
  `};
`

// Layout Components
const DocLayout = styled.div`
  padding-top: ${spacing.medium} !important;
  display: grid;
  grid-column-gap: ${spacing.medium};
  grid-row-gap: ${spacing.medium};
  grid-template-areas:
    'nav'
    'breadcrumbs'
    'content';
  grid-template-columns: 1fr;
  grid-template-rows: max-content max-content max-content;

  ${media.medium`
    grid-template-areas:
      'nav breadcrumbs'
      'nav content';
    grid-template-columns: max-content 1fr;
    grid-template-rows: max-content 1fr;

  `};
`

const SideNavLayout = styled.div`
  grid-area: nav;
  position: relative;
`
const SideNavSticky = styled.div`
  position: sticky;
  top: 75px;
  display: grid;
  grid-template-rows: min-content max-content min-content;
  grid-gap: ${spacing.medium};
`

const LinksLayout = styled.div`
  display: grid;
  grid-gap: ${spacing.tiny};
  ${media.medium`
    grid-gap: 0;
  `};
`

const ContentLayout = styled.div`
  grid-area: content;
  display: flex;
  justify-content: space-evenly;
  & > div {
    display: grid;
  }
  /* Remove margin from first element of markdown content */
  & > div > *:first-child {
    margin-top: 0 !important;
  }
`

const ShowcaseItem = styled.div`
  border: 1px solid black;
  border-radius: 15px;
  padding: 10px;
`

const MenuItem = styled(StyledLink.withComponent('div'))`
  cursor: pointer;
`

type NavProps = {
  activeDoc: Object,
  docs: Object[],
}
class NavLinks extends React.PureComponent<NavProps> {
  render() {
    const { activeCat, items, filterFn, type } = this.props

    return (
      <LinksLayout>
        {items.map(cat => (
          <MenuItem key={cat} onClick={() => filterFn(cat, type)}>
            <Text monospace="true" centerVertical size="small">
              {getIcon(cat)}
              &nbsp;
              {cat}
            </Text>
          </MenuItem>
        ))}
        {/* {categories.map(cat => (
          <StyledLink
            key={cat}
            to={cat}
            isActive={cat === cat}
          >
            <Text monospace centerVertical size="small">
              {getIcon(node.node.frontmatter.icon)}
              &nbsp;
              {node.node.frontmatter.title}
            </Text>
          </StyledLink>
        ))} */}
      </LinksLayout>
    )
  }
}

const arrayUnique = array => {
  var a = array.concat()
  for (var i = 0; i < a.length; ++i) {
    for (var j = i + 1; j < a.length; ++j) {
      if (a[i] === a[j]) a.splice(j--, 1)
    }
  }

  return a
}

type Props = {
  location: Object,
  data: { heroImage: any },
}
class Showcase extends React.PureComponent<Props> {
  constructor(props) {
    super(props)
    this.state = {
      categories: [],
      technologies: [],
      filter: {
        cats: [],
        tech: [],
      },
    }

    this.handleFilterClick = this.handleFilterClick.bind(this)
  }

  componentDidMount() {
    const { data } = this.props
    const categories = data.showcaseItems.edges.reduce(
      (prev, curr, index) => arrayUnique(prev.concat(curr.node.categories)),
      []
    )
    const technologies = data.showcaseItems.edges.reduce(
      (prev, curr, index) => arrayUnique(prev.concat(curr.node.technologies)),
      []
    )

    this.setState({
      categories,
      technologies,
    })
  }

  handleFilterClick(val, type) {
    const { filter } = this.state

    const typeFilter = filter[type]

    const modifiedFilter = typeFilter.includes(val)
      ? typeFilter
          .reduce((prev, curr, index) => {
            if (val === curr) return [...prev]
            return [...prev, curr]
          }, [])
          .sort()
      : [...typeFilter, val].sort()

    this.setState({
      filter: {
        ...this.state.filter,
        [type]: modifiedFilter,
      },
    })

    //console.log(filter)
  }

  changeDocs(event: SyntheticEvent<onSelect>) {
    push(`/${event.target.value}`)
  }

  render() {
    const { data, location } = this.props
    const { categories, technologies, filter } = this.state
    //const doc = data.markdownRemark

    const pageContent = data.showcaseItems.edges.map((item, index) => {
      if (
        item.node.categories.some(r => filter.cats.includes(r)) ||
        item.node.technologies.some(r => filter.tech.includes(r))
      ) {
      }
    })
    return (
      <DefaultLayout location={location}>
        <HelmetPlus
          location={location}
          title={`Showcase - ${data.site.siteMetadata.title}`}
        />
        <Container>
          <DocLayout>
            <SideNavLayout>
              <SideNavSticky>
                <H2 isTitle>Showcase</H2>

                <H3 isTitle>Categories</H3>
                <NavLinks
                  items={categories}
                  filterFn={this.handleFilterClick}
                  type="cats"
                />
                <H3 isTitle>Technologies</H3>
                <NavLinks
                  items={technologies}
                  filterFn={this.handleFilterClick}
                  type="tech"
                />
                {(filter.cats.length > 0 || filter.tech.length > 0) && (
                  <div>
                    <H3>Active Filters</H3>
                    <ul>
                      {filter.cats.map((cat, i) => (
                        <li>{cat}</li>
                      ))}
                    </ul>
                    <ul>
                      {filter.tech.map((cat, i) => (
                        <li>{cat}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </SideNavSticky>
            </SideNavLayout>
            <ContentLayout>
              {data.showcaseItems.edges.map((item, index) => {
                if (
                  item.node.categories.some(r => filter.cats.includes(r)) ||
                  item.node.technologies.some(r => filter.tech.includes(r)) ||
                  (filter.cats.length === 0 && filter.tech.length === 0)
                )
                  return (
                    <ShowcaseItem key={item.node.title + index}>
                      <h3>{item.node.title}</h3>
                      <div>{item.node.description}</div>
                      <div>Status: {item.node.status}</div>
                      Categories:
                      <ul>
                        {item.node.categories.map((cat, i) => (
                          <li key={cat + i}>{cat}</li>
                        ))}
                      </ul>
                      Technologies:
                      <ul>
                        {item.node.technologies.map((tech, i) => (
                          <li key={tech + i}>{tech}</li>
                        ))}
                      </ul>
                      <div>
                        Website:{' '}
                        <a href={item.node.links.website} target="_blank">
                          {item.node.links.website}
                        </a>
                      </div>
                    </ShowcaseItem>
                  )
              })}
            </ContentLayout>
          </DocLayout>
        </Container>
      </DefaultLayout>
    )
  }
}

export default Showcase

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }

    #get showcase items
    showcaseItems: allShowcaseJson {
      totalCount
      edges {
        node {
          title
          desciption
          status
          categories
          technologies
          links {
            website
            github
            telegram
            twitter
          }
        }
      }
    }
  }
`
