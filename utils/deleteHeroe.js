export const deleteHeroe = async (id) => {
    try {
      const options = {
        method: "POST",
      };
  
      const response = await fetch(`http://localhost:5000/delCharacter/${id}`, options);
      return response.statusText;
    } catch (error) {
      console.log(error);
    }
  };
  