const Test = () => {
  return (
    <div>
      <label htmlFor="shirt">Shirt</label>
      <input type="checkbox" name="shirt" id="shirt"  />
      
      <label htmlFor="jeans">Jeans</label>
      <input type="checkbox" name="jeans" id="jeans"  />
      
      <label htmlFor="shoes">Shoes</label>
      <input type="checkbox" name="shoes" id="shoes" />
    </div>
  )
}

export default Test


// const Test = () => {
//   const checkBoxOption = ["shirt ", "jeans", "shoes"];
//   return (
//     <div>
//       {checkBoxOption.map((element, index) => {
//         return (
//           <>
//             <label htmlFor="shirt" >{element}</label>
//             <input type="checkbox" name="shirt" id="shirt" />
//           </>
//         );
//       })}
//       {/* <label htmlFor="shirt">Shirt</label>
//       <input type="checkbox" name="shirt" id="shirt"   />
      
//       <label htmlFor="jeans">Jeans</label>
//       <input type="checkbox" name="jeans" id="jeans"   />
      
//       <label htmlFor="shoes">Shoes</label>
//       <input type="checkbox" name="shoes" id="shoes"  /> */}
//     </div>
//   );
// };

// export default Test;
