const angles = document.querySelectorAll(".angle");
const btnIsTriangle = document.querySelector("#btn-istriangle");
const output = document.querySelector("#output")

function sumOfAngles(){
  return (Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value));
}


function istriangle()
{
  const anglesSum = sumOfAngles();
  if (anglesSum === 180)
  {
    output.innerText = "yes, the three angles form a triangle."
  }
  else{
    output.innerText = "No, the given angles do not form a triangle."
  }
}

btnIsTriangle.addEventListener("click", istriangle);