export const ItemDetail = ({item}) =>{
    return(
        <>
            <h1>{item.title}</h1>
            <div>{item.description}</div>
            <div>{item.price}</div>        
        </>
    )

}
