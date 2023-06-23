import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const Layout = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const contextShown = () => (
        <div className="context">
          <h1>Content</h1>
          <p>Lorem ipsum</p>
        </div>
      )

      const rightNavBarShown = () => (
        <div className="context">
          <h1>Right Navbar Menu</h1>
          <p>Ad 1</p>
          <p>Ad 2</p>
        </div>
      )

      const leftNavBarShown = () => (
        <div className="context">
          <h1>Left Navbar Menu</h1>
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
          </ul>
        </div>
      )

      return (
        <div className="layout">
          <h1 className="nav">Header</h1>
          <div className="body">
            {showLeftNavbar && leftNavBarShown()}
            {showContent && contextShown()}
            {showRightNavbar && rightNavBarShown()}
          </div>
          <h1 className="nav">Footer</h1>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Layout
