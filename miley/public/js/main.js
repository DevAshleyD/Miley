class Account {
  constructor(){
    window.follow = this.follow.bind(this)
  }

  follow(e){
    let id = e.getAttribute('data-id')
    let url = e.getAttribute('data-url')
    let action = e.getAttribute('data-action')
    let token = document.querySelector('meta[name=csrf_token]').content
    let headers = new window.Headers({
      'X-CSRFToken': token,
      'Content-Type': 'application/json'
    })
    let data = JSON.stringify({
      'id': id,
      'action': action
    })
    window
      .fetch(url, {
        'method': 'POST',
        'headers': headers,
        'credentials': 'include',
        'body': data
      })
      .then(function(data){
        // refresh
        if (data.status == 200){
          window.location.href = window.location.href
        }
      }).catch(function(err){
        console.error('Error:', err)
      })
  }
}

class ImageBookmark{
  constructor(){
    window.imageLike = this.like.bind(this)
  }

  like(e){
    let id = e.getAttribute('data-id')
    let url = e.getAttribute('data-url')
    let action = e.getAttribute('data-action')
    let token = document.querySelector('meta[name=csrf_token]').content
    let headers = new window.Headers({
      'X-CSRFToken': token,
      'Content-Type': 'application/json'
    })
    let data = JSON.stringify({
      'id': id,
      'action': action
    })
    window
      .fetch(url, {
        'method': 'POST',
        'headers': headers,
        'credentials': 'include',
        'body': data
      })
      .then(function(data){
        // refresh
        if (data.status == 200){
          window.location.href = window.location.href
        }
      }).catch(function(err){
        console.error('Error:', err)
      })
  }
}

const account = new Account()
const imageBookmark = new ImageBookmark()
