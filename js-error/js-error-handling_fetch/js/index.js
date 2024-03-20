console.clear();

const userElement = document.querySelector(".user");
const p = document.querySelector("p");
console.log(p);

async function getUser(url) {
  // fetch data
  const response = await fetch(url);
  // check if data is NOT ok
  if (!response.ok) {
    // if data is not ok, execute:
    console.log("Network error");
    return null;
  }
  {
    // if data is ok, execute:
    try {
      // process data:
      const json = await response.json();
    } catch (error) {
      // in case fetched data is not .json
      console.log("Not a .json file");
    }

    return json.data; // wohin????
  }
}

// document.querySelectorAll("button[data-url]").forEach((button) =>
//   button.addEventListener("click", async (event) => {
//     const user = await getUser(event.target.dataset.url);
//     userElement.innerHTML = `
//     <h2>${user.first_name} ${user.last_name}</h2>
//     <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/>
//     `;
//   })
// );

document.querySelectorAll("button[data-url]").forEach((button) =>
  button.addEventListener("click", async (event) => {
   
      const user = await getUser(event.target.dataset.url);
      console.log(user);
      if (!user) {

      }

      // display/insert picture and name
      userElement.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}"/> 
    `;
      p.textContent = ""; // remove error message
    } catch (error) {
      // EXECUTE IN CASE OF ERROR

      userElement.innerHTML = "User info will appear here."; // remove picture and name
      {
        p.textContent = "Not a user profile.";
      }
    }
  })
);
