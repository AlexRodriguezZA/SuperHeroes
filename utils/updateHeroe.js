export const updateHeroe = async (ObjectSuperHeroe, id) => {
    try {
      //console.log(ObjectSuperHeroe);
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(ObjectSuperHeroe),
      };
  
      const response = await fetch(`http://localhost:5000/updateCharacter/${id}`, options);
      console.log(response);
      return response.statusText;
    } catch (error) {
      console.log(error);
    }
  };
  