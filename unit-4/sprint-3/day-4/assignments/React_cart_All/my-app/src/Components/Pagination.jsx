
export default function Pagination({page ,setPage}){
  let style = {
        width:"10%" ,
        margin:"auto" ,
  }
    return (
        <div style={style}>
            <button disabled={page===1} onClick={()=>setPage(page-1)}>Previous</button>
            <button >{page}</button>
            <button onClick={()=>setPage(page+1)}>Next</button>
        </div>
    )
}