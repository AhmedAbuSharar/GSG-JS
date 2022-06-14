let tweets = [];
 function create(user , content) {
    let tweet = {
        user : user,
        content : content,
        index : tweets.length,
        islike : false
    }
    return tweet;
 }

function print(){
    const parent = document.querySelector('#new-tweet');
    const text = document.querySelector('#new-tweet').children[1].children[1].children[0];
    const new_tweet = document.createElement('div');
    new_tweet.classList.add('feed-tweet');
    new_tweet.innerHTML = `        <div class="feed-tweet">
    <img class="account-img" src="imges/account01.png" alt="">
 
  <div class="feed-tweet-details">
    <div class="tweeter-details">
      <a href="" class="tweeter-name">${tweets[tweets.length - 1].user}
        <span class="tweeter-handle">@${tweets[tweets.length - 1].user}</span>
      </a>
      <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
    </div>

    <div class="tweet-text"> 
    <p>${tweets[tweets.length - 1].content}</p>  
    </div>
    <div class="tweet-icons"> 
      <input type="text" id="index" value="${tweets[tweets.length - 1].index}" hidden>
      <i class="fa fa-comment-o" aria-hidden="true"></i>
      <i class="fa fa-retweet" id="re${tweets[tweets.length - 1].index}" aria-hidden="true"></i>
      <i id="like${tweets[tweets.length - 1].index}" class="fa fa-heart" aria-hidden="true"></i>
      <i class="fa fa-share-square-o" aria-hidden="true"></i></div>
  </div>
</div>`;
parent.insertBefore(new_tweet, parent.children[2]);
text.reset();
}


function like(index, like) {
    if(!tweets[index].isliked) {
        like.classList.remove('blue');
        like.classList.add('heart') ;
        tweets[index].isliked = true;
    } else {
        like.classList.remove('heart');
        like.classList.add('blue');
        tweets[index].isliked = false;
    }
}

function retweet(ind, re) {
    tweets.push({
        index: ind,
        user : re.children[0].children[0].children[0].textContent.substring(1),
        content : re.children[1].textContent,
        islike : false,

    });
    print();    
}

const post = document.querySelector('#press');
post.addEventListener('click', () => {
    tweets.push(create(document.querySelector('#name').value, document.querySelector('#text').value));
    print();
    
})

document.addEventListener('click', function(e) {
    const but = document.querySelector(`#${e.target.id}`).parentElement;
    if(e.target.id.substring(0,4) == 'like') {
        like(but.children[0].value, document.querySelector(`#${e.target.id}`));
    }
    if(e.target.id.substring(0,2) == 're') {
        retweet(but.children[0].value, document.querySelector(`#${e.target.id}`).parentElement.parentElement);
    }
});