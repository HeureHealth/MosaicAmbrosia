//Code has to read RaghuSantanam.js again, then only the id's in the header file get appended with respective src's
var vector = general_info.vector, customer_info = general_info.customer_info, level = general_info.level;

var path_img = "..\/images\/";
var cust_logo = customer_info.logo;
var cust_img = customer_info.uimg;
var cust_name = customer_info.uname;
var hosp_logo = customer_info.navimg;

document.getElementById("logo").src = path_img+cust_logo;
document.getElementById("pic").src = path_img+cust_img;
document.getElementById("uname").innerHTML = cust_name;