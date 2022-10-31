/* Extract the domain name from a URL

DESCRIPTION:
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet" */


function domainName(url){
  let domain = url.replace('www.', '').replace('http://', '').replace('https://', '').split('.')[0]

  console.log(domain);

}

domainName("http://google.com") // "google"
domainName("https://google.co.jp") // "google"
domainName("www.xakep.ru") // "xakep"
domainName("sadf.it")