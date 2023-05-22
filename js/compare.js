// Get the compare buttons using their class names
const compareBtnDesktop = document.querySelector('.compare-btn-desktop');
const compareBtnMob = document.querySelector('.compare-btn-mob');

compareBtnDesktop.addEventListener('click', compare);
compareBtnMob.addEventListener('click', compare);

function compare() {
  console.log('hello');
  var searchValue1 = document.getElementById('searchBar1').value;
  var searchValue2 = document.getElementById('searchBar2').value;

  if (searchValue1 === '' || searchValue2 === '') {
    alert('Fill all the blanks');
  } else {
    let token = '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';
    fetch(`https://api.github.com/users/${searchValue1}`,)
    // , {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // })
      .then((result1) => result1.json())
      .then((data1) => {
        document.getElementById('total-repositores1').innerHTML = `Total repositories: ${data1.public_repos}`;
        document.getElementById('total-followers1').innerHTML = `Total followers: ${data1.followers}`;
        document.getElementById('total-score1').innerHTML = `Total score: ${data1.followers + data1.public_repos}`;
        document.getElementById('username1').innerHTML = data1.login;
        document.getElementById('first-img').setAttribute('src', data1.avatar_url);

        fetch(`https://api.github.com/users/${searchValue2}`)
        // , {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // })
          .then((result2) => result2.json())
          .then((data2) => {
            document.getElementById('total-repositores2').innerHTML = `Total repositories: ${data2.public_repos}`;
            document.getElementById('total-followers2').innerHTML = `Total followers: ${data2.followers}`;
        document.getElementById('total-score2').innerHTML = `Total score: ${data2.followers + data2.public_repos}`;
            document.getElementById('username2').innerHTML = data2.login;
            document.getElementById('second-img').setAttribute('src', data2.avatar_url);

            if (data1.followers + data1.public_repos > data2.followers + data2.public_repos) {
              document.getElementById('first-user').innerHTML = 'Winner';
              document.getElementById('second-user').innerHTML = 'Loser';
            } else if (data1.followers + data1.public_repos < data2.followers + data2.public_repos) {
              document.getElementById('first-user').innerHTML = 'Loser';
              document.getElementById('second-user').innerHTML = 'Winner';
            }
            else if(data1.followers + data1.public_repos == data2.followers + data2.public_repos) {
              document.getElementById('first-user').innerHTML = 'Draw';
              document.getElementById('second-user').innerHTML = 'Draw';
            } else {
              if (data1.login == undefined && data2.login == undefined){
                alert("user1 and user2 are not found")
              }
              else if (data1.login === undefined){
                alert("user1 is not found")
              }
              else if (data2.login === undefined){
                console.log(data2.login);
                alert("user2 is not found")
              }
            }
          });
      });
  }
}
