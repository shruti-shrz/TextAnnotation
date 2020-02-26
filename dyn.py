import requests
import json
# import MySQLdb
from bs4 import BeautifulSoup
# HOST = "localhost"
# USERNAME = "root"
# PASSWORD = ""
# DATABASE = "scraping_sample"
# url_to_scrape = "https://en.cppreference.com/w/cpp/language"
# plain_html_text = requests.get(url_to_scrape)
# soup = BeautifulSoup(plain_html_text.text, "html.parser")
# # print(soup.prettify())
# name_of_class = soup.h3.text.strip()
# basic_data_table = soup.find("tr", {"valign":"top"});
# # print(len(basic_data_table))
# l = {}
# for c in basic_data_table.findAll('a'):
# 			l[c.text] = c['href']
# print(l)
# def preprocess(t):
# 	# for e in t:
# 	# 	for j in e:
# 	# 		if(j == '\''):
# 	# 			print("check")
# 	# 			e.charAt().replace(j,' ')
# 	t = t.replace("\'",'')
# 	return t
d = {} 
def unwanted(arr):	
	f = open('./static/js/out.json','r+')
	d = json.load(f)
	flag = -1
	for k,v in d.items():
		if k not in arr:
			flag = 0
	f.close()
	if(flag==0):
		url3 = "https://www.javatpoint.com/cpp-tutorial"
		plain =  requests.get(url3)
		s3 = BeautifulSoup(plain.text,"html.parser")
		d2 = s3.find('div',{'id':'menu'})
		dict3 = {}
		for k in d2.findAll('a'):
			dict3[k.text.lower().strip()] = k['href']
		#print(dict3)
		for k, v in dict3.items():
			if k in arr:
				u = "https://www.javatpoint.com/" + v
				# print(u)
				p2 = requests.get(u)
				s4 = BeautifulSoup(p2.text,"html.parser")
				# d3 = {}
				# print(s4.find('div',{'id':'city'}))
				d[k] = s4.find('div',{'id':'city'}).find('p').text
				f1 = open('./static/js/out.json','w')
				# d[]
				json.dump(d,f1)
				f1.close()


		

s = "c++ for loop"
l = [" return "," function ","programming"," character "," int "," file "," errors "," comment ","cout","preprocessor","#include","directives","namespace"," main ","iostream"," error "," compiler "," identifiers "," variable "," memory "," cast "," bytes "," long "," integer "," float "," double "," unsigned "]
print(l)
unwanted(l)


# url2 = "https://en.cppreference.com"
# # db = MySQLdb.connect(HOST, USERNAME, PASSWORD, DATABASE)
# # cursor = db.cursor()
# dict = {}
# json_file = open('./static/js/out.json','w')
# for k, v in l.items():
# 	k = k.lower().strip()
# 	url_scrape = url2 + v
# 	print(url_scrape)
# 	plain_html2 = requests.get(url_scrape)
# 	soup2 = BeautifulSoup(plain_html2.text, "html.parser")
# 	if(soup2.find('div',{'id':'mw-content-text'}).find('p')==None):
# 		continue
# 	d = soup2.find('div',{'id':'mw-content-text'}).find('p').text
# 	#d = preprocess(d)
# 	dict[k] = d
# 	#print(soup2)
# 	# sql = "INSERT INTO `comments` (`label`, `hint`) VALUES ('"+ k +"','"+ d +"')"
# 	# cursor.execute(sql)
# json.dump(dict,json_file)
# json_file.close()
# cursor.execute(sql)
# db.commit()

