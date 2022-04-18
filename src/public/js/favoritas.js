
  const app = document.getElementById("root");
  const container = document.createElement("div");
  container.setAttribute("class", "container");
  app.appendChild(container);
  const $fav = document.querySelector('.fav')
  
    const getPelicula = async (id) => {
      try {
        const response = await fetch(`api/movies/${id}`);
        const peliculas = await response.json();
              
        //Codigo que debemos usar para mostrar los datos en el frontend
        let data = peliculas.data;
        let favoritas = []
        //console.log(data)
        
        data.forEach((movie) => {
          
          const card = document.createElement("div");
          card.setAttribute("class", "card");

          const h1 = document.createElement("h1");
          h1.textContent = movie.title;

          const p = document.createElement("p");
          p.textContent = `Rating: ${movie.rating}`;

          const duracion = document.createElement("p");
          duracion.textContent = `Duración: ${movie.length}`;

          container.appendChild(card);
          card.appendChild(h1);
          card.appendChild(p);
          if (movie.genre !== null) {
            const genero = document.createElement("p");
            genero.textContent = `Genero: ${movie.genre.name}`;
            card.appendChild(genero);
          }
          card.appendChild(duracion);
          
          favoritas.push(movie)
        });
        
      } catch (error) {
        console.log(error)
      }
      console.log(this.favoritas)
      console.log("FAVORITAS")
      localStorage.setItem('peliculasFavoritas', this.favoritas)
    }
    $fav.addEventListener('load', () => {
      localStorage.getItem('peliculasFavoritas')
    })