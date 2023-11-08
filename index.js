var typed = new Typed("#text", {
  strings: ["fullStack developer", "software developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector("#send").value = "Submiting..."
  const data = new FormData(form);
  fetch(" https://script.google.com/macros/s/AKfycbwz_gNw4oQklRhDtJTCIh__rXyhRno-V75dAJ9FJnyBNqNXgzftZdkdRUnD_w1zB9B2Dg/exec"
    ,{
      method:"POST",
      body:data
    })
    .then((res) => {
      res.text();
    }).then((data) => {
      console.log(data);
      const form = document.querySelector("form");
      form.remove();
      const para = document.createElement("p");
      para.innerHTML = "Sent successfully";
      document.getElementById("contact-right").appendChild(para);
      para.style.color = "white";
      para.style.fontSize = "25px";
    });
});
