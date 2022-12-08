// Write Code here
// do a default export

export default function Image(prop){
const {title , src ,alt , width , height } = prop
   
return <div>
     <h2>{title}</h2>
     <img src={src} alt={alt} width={width} height={height} />

</div>
    
}