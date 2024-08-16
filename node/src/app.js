import axios from 'axios';

axios.get('http://worldtimeapi.org/api/ip')
  .then(function(response){
    console.log(response.data)
  })