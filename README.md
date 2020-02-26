# Text-Annotation
Dynamically providing hints on important topics of programming books for ease of understanding of users
Built on *Flask* framework and uses *javascript* as well for browser renderings


## Installation
Clone the repo and ```cd``` into the directory.
Python 3.0 and above version must be present in your system.
run the ```runner.py``` file
```bash
> python runner.py
```
You can view the web pages on your <localhost:port_number> accordingly.
## Modifications
 All the necessary stylings are present in static->css->folder and all the pages namely index to p5 are present in static->templates folder
```html
<script src="https://unpkg.com/hrjs"></script>
```
[Hrjs](https://github.com/mburakerman/hrjs) is an external dependency used for highlighting those important keywords. 

## How it works
- the main running file is ```runner.py```
- each html page has a ```<script>``` which checks for the keyword present in our dictionary and accordingly highlights them and ceates hints for the scraped data dynamically on the right side of the page
- We dynamically scrape data and put it into ```out.json``` file in static->js folder only when there is a new keyword not present in our json file.
- dyn.py used to extract data from different surces dynamically and store in json format, which will be used to show as hint.

## Contributing
First fork this repo then clone it into your system.
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

