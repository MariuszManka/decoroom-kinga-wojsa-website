import React from 'react'
import { Tabs, Tab } from '@material-ui/core'
import useConfig from 'src/hooks/useConfig'
import { isEmpty } from 'lodash'
import { useTopBarStyles } from './Topbar.styles'
import { Link } from 'gatsby'

const TabContent = ({ hrefsArray }) => {

   const { topBarLink, topBarItem } = useTopBarStyles()

   if(isEmpty(hrefsArray))
      return null
   
    return (
      hrefsArray.map((hrefObject, index) => {
         
         if(!hrefObject.href || !hrefObject.label)
            return null
            
         return (
            <Link to={hrefObject.href} key={index} className={topBarLink} >
               <Tab label={hrefObject.label} value={hrefObject.name}  className={topBarItem} />
            </Link>
         )
      })
    )       
}

const Topbar = () => {
   const hrefsArray = useConfig("hrefs")
   const { topBarWrapper, topBarTabsFlexContainer, topBarLogo } = useTopBarStyles()

   return (
     <div className={topBarWrapper}>
       <Tabs variant="fullWidth" value={false} classes={{ flexContainer: topBarTabsFlexContainer }}>
         <TabContent hrefsArray={hrefsArray} />
       </Tabs>
     </div>
   )
}
export default Topbar
