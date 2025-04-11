// write product card here
import React from 'react'
import Button from './button';

const productcard = () => {
    const productImage = "https://i.pinimg.com/736x/c2/dc/e1/c2dce1bffd0945f04281aa207dc0c913.jpg";
    const product = "Cozy Winter Knit";
    const price = "$99.9";
  return (
    <div style={{border: "3px solid #ddd",
        borderRadius: "8px",
        maxWidth: "300px",
        padding: "16px",
        textAlign: "center",
        margin: "20px auto",
        fontFamily: "Arial, sans-serif",
        backgroundColor:"white"
        }}>
      <img src={productImage} alt="product" style={{
        borderRadius: "5%",
        width: "300px",
        height: "500px",
        marginBottom: "16px"
      }}/>
      <p style={{color:'black'}}>{product}</p>
      <p style={{color:'black'}}>{price}</p>
      <Button/>
    </div>
  )
}

export default productcard
