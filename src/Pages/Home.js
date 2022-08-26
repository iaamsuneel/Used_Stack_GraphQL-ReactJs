import { useQuery } from "@apollo/client"
import React from "react"
import { GET_LOCATIONS } from "../Query/Queries"
const Home = () => {
    const { loading, error, data } = useQuery(GET_LOCATIONS)
    console.log("first", data)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :</p>;
    return (<>
        <h5>Fetch Data in React from a GraphQL API</h5>
        <div>
            {
                data.locations.map((item, index) => (
                    <div key={index}>
                        <h3>{item.name}</h3>
                        <img width="400" height="250" alt="location-reference" src={item.photo} />
                        <br />
                        <b>About this location:</b>
                        <div style={{
                            width: '60%',
                            margin: '0 auto'
                        }}>{item.description}</div>
                        <br />
                    </div>
                ))}

        </div>
    </>)
}
export default Home