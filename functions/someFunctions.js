// const html4Home = 
// `<div class='main-content'>
// <h1>Hi this is some html created using Strings</h1>
// </div>`;
// console.log(html4Home)

// document.body.appendChild(html4Home);
const div = document.createElement('div');
document.body.append(div)
function generatePlayerCard(name, age, height) {
    const html = `
      <div class="playerCard">
        <h2>${name} — ${age}</h2>
        <p>Their Height is ${height} and ${age} years old. In Dog years this person would be ${age *
      7}. That would be a tall dog!
          <button class="delete" type="button">&times; Delete</button>
      </p>
  
      </div>
    `;
    div.insertAdjacentHTML('beforebegin', html);
  }
generatePlayerCard()