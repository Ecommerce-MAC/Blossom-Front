
function ProductInfo() {


  return (
    <>

      <Card key={product.id} className="my-3">
        {/*  <Card.Img variant="top" src={product.image} />  */}
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.category}</Card.Text>
          <Card.Text>{product.brand}</Card.Text>
          <Card.Text>{product.price}€</Card.Text>
          <Button variant="primary" href="/productInfo/:id">Favorite</Button>
          <Button variant="primary" href="/productInfo/:id">Edit</Button>
          <Button variant="primary"  >Delete</Button>
          
        </Card.Body>
      </Card>
    </>
  );




}

export default ProductInfo

