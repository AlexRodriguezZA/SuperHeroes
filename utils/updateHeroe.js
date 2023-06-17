export const updateHeroe = async (ObjectSuperHeroe) => {
    try {
      console.log(ObjectSuperHeroe);
      const formData = new FormData();
      formData.append("name", ObjectSuperHeroe.name);
      formData.append("year", ObjectSuperHeroe.year);
      formData.append("home", ObjectSuperHeroe.home);
      formData.append("biography", ObjectSuperHeroe.biography);
      formData.append("nameCharacter", ObjectSuperHeroe.nameCharacter);
      ObjectSuperHeroe.equipment.forEach((equipment, index) => {
        formData.append(`equipment`, equipment);
      });
      ObjectSuperHeroe.imagesPath.forEach((imagen, index) => {
        formData.append(`image`, imagen);
      });
  
      const options = {
        method: "POST",
        body: formData,
      };
  
      const response = await fetch("http://localhost:5000/addCharacter", options);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  