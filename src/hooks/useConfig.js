import { useStaticQuery, graphql,  } from 'gatsby'

const useConfig = (propertyName) => {
   const data = useStaticQuery(graphql`
      query configuration {
         datoCmsConfig {
            config
         }
      }`
   )

   return JSON.parse(data.datoCmsConfig?.config)?.[propertyName] ?? []
}

export default useConfig
