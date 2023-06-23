import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const showContext = () => {
        onToggleShowContent()
        //    console.log('showContext Trigger')
      }

      const showLeftNavBar = () => {
        onToggleShowLeftNavbar()
        //  console.log('LeftNavBar Trigger')
      }

      const showRightNavBar = () => {
        onToggleShowRightNavbar()
        //  console.log('RightNavBar Trigger')
      }

      const renderContext = () => (
        <div>
          <input
            type="checkBox"
            id="ShowContext"
            onClick={showContext}
            defaultChecked
          />
          <label htmlFor="ShowContext">Content</label>
        </div>
      )

      const renderRightNavBar = () => (
        <div>
          <input
            type="checkBox"
            id="ShowRightNavbar"
            onClick={showRightNavBar}
            defaultChecked
          />
          <label htmlFor="ShowRightNavbar">Right NavBar</label>
        </div>
      )

      const renderLeftNavBar = () => (
        <div>
          <input
            type="checkBox"
            id="ShowLeftNavbar"
            onClick={showLeftNavBar}
            defaultChecked
          />
          <label htmlFor="ShowLeftNavBar">Left Navbar</label>
        </div>
      )

      return (
        <div className="main-container">
          <h1>Layout</h1>
          {renderLeftNavBar()}
          {renderContext()}
          {renderRightNavBar()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
