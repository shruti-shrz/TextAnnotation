file = "a_example.txt"
f = open(file,"r")
content = f.read()
content = content.split("\n")
print(content)
parameters = content[0].split(" ")
B = int(parameters[0])
L = int(parameters[1])
D = int(parameters[2])

book_scores = content[1].split(" ")

ref = []
j = 0
for i in range(0,L):
    dict = {}
    lp = content[j+2].split(" ")
    b_id = content[j+3].split(" ")
    j = j+2
    dict['lp'] = lp
    dict['b_id'] = b_id
    ref.append(dict)


