new HR("#page", {
    highlight: [" return "," function ","programming"," character "," int "," file "," errors "," comment ","cout","preprocessor","#include","directives","namespace"," main ","iostream"," error "," compiler "," identifiers "," variable "," memory "," cast "," bytes "," long "," integer "," float "," double "," unsigned "],
    backgroundColor: "#B4FFEB"
  }).hr();

  function readTextFile(file, callback) {
      var rawFile = new XMLHttpRequest();
      rawFile.overrideMimeType("application/json");
      rawFile.open("GET", file, true);
      rawFile.onreadystatechange = function() {
          if (rawFile.readyState === 4 && rawFile.status == "200") {
              callback(rawFile.responseText);
          }
      }
      rawFile.send(null);
  }

  readTextFile("./static/js/out.json", function(text){
      var example = {
          "cout":"#include <iostream><br>using namespace std;<br>int main( ) {<br>char ary[] = \"Welcome to C++ tutorial\";<br>cout << \"Value of ary is: \" << ary << endl;<br>}",
          "#include":"#include <iostream><br>using namespace std;<br>int main( ) {<br>char ary[] = \"Welcome to C++ tutorial\";<br>cout << \"Value of ary is: \" << ary << endl;<br>}",
          "comment":"/*<br>void EventLoop();<br>void EventLoop();<br>/**/",
          "return":"void printChars(char c, int count) {<br>for (int i=0; i<count; i++) {<br>cout << c;<br>}//end for<br><br>return;  // Optional because it's a void function<br>}//end printChars",
          "integer":"(Datatype)int\t\t(size in bytes)4\t\t(Range)-2,147,483,648 to 2,147,483,647"
      }
      data = JSON.parse(text);
      var coll = {}
  
      var text = document.getElementById("page").innerText
      text.replace(/return|function|programming|character|int|file|errors|comment|cout|preprocessor|#include|directives|namespace|main|iostream|error|compiler|identifiers|variable|memory|cast|bytes|long|integer|float|double|unsigned/gi,(val)=>{
          coll[val] = 1
      })
      for (var key in coll){
          if(data.hasOwnProperty(key)){
              // console.log(key)
              var node = document.createElement("div")
              node.id = "hover"
              var node_image = document.createElement("div")
              node_image.id = "image"
              var image = document.createElement("img")
              image.src = "./static/css/bulb.png"
              node_image.appendChild(image)
              node.appendChild(node_image)
              var node_hint = document.createElement("div");
              node_hint.id = "hint"
              var node_title = document.createElement("strong");
              var node_break = document.createElement("br");
              var textnode_title = document.createTextNode(key);
              var text = data[key];
              var text_1 = document.createTextNode(text.substring(0,text.length/2));
              var text_2 = document.createTextNode(text.substring(text.length/2));
//               var textnode_content = document.createTextNode(data[key]);
              var details = document.createElement("details");
              var summary = document.createElement("summary");
              var summary_text = document.createTextNode("Read More/Less...");
              node_title.appendChild(textnode_title);
              summary.appendChild(summary_text);
              details.appendChild(summary);
              node_hint.appendChild(node_title);
              node_hint.appendChild(node_break);
              node_hint.appendChild(text_1);
              details.appendChild(text_2);
              node_hint.appendChild(details);
              node.appendChild(node_hint);
              if(example.hasOwnProperty(key)){
                  var hover_node = document.createElement("div")
                  hover_node.id = "hover-text"
                  var text = example[key]
                  hover_node.innerHTML += text;
                  node.appendChild(hover_node)
              }
              document.getElementById("hintbox").appendChild(node);
          }
      }
  });
