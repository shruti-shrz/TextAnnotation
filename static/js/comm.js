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

  //usage:
  // var data = 5
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
  // var content = JSON.parse(data)
      var text = document.getElementById("page").innerText
      text.replace(/return|function|programming|character|int|file|errors|comment|cout|preprocessor|#include|directives|namespace|main|iostream|error|compiler|identifiers|variable|memory|cast|bytes|long|integer|float|double|unsigned/gi,(val)=>{
          coll[val] = 1
          // console.log(val)
      })
      // console.log(data)
      // console.log(coll)
      for (var key in coll){
          // <div id="hint">
          // 	<strong>cue</strong>
          // 	this is a testing example</br>
          // </div>
          // <div id="hintbox">
          // 	<div id="hint"></div>
          // </div>
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
              var textnode_content = document.createTextNode(data[key]);
              node_title.appendChild(textnode_title);
              node_hint.appendChild(node_title);
              node_hint.appendChild(textnode_content);
              node_hint.appendChild(node_break);
              node.appendChild(node_hint)
              if(example.hasOwnProperty(key)){
                  var hover_node = document.createElement("div")
                  hover_node.id = "hover-text"
                  var text = example[key]
                  // var text_node = document.createTextNode(text)
                  // hover_node.appendChild(text_node)
                  hover_node.innerHTML += text;
                  node.appendChild(hover_node)
              }
              document.getElementById("hintbox").appendChild(node);
          }
      }
  });