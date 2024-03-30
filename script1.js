function Send(){
    /* console.log("function call"); */
    var name = document.getElementById('Name').value;
    var email = document.getElementById('Email').value;
    var msg = document.getElementById('message').value;

    var body = "Name: " + name + "<br/> Email: " + email + "<br/> Message: " + msg;

    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "ritusingh.19.or@gmail.com",
      Password : "681CA11A24E6622D757C48B8AA223A775332",
      To : 'ritusingh.19.or@gmail.com',
      From : "ritusingh.19.or@gmail.com",
      Subject : "Portfolio Website",
      Body : body
    }).then(
      message => alert(message)
      );
 }