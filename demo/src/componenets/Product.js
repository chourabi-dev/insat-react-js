export default function Product(props){
    return(
        <div className="card" >
            <img src={ props.photoURL } className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{ props.title }</h5> 
            </div>
        </div>

    );
}