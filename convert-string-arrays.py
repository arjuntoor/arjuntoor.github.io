
highlights = []

resume = open('resume.txt', 'r')
for line in resume:
    line = line.strip()

    if line.find('highlights [') == 0:
    

        while line.find('highlights [') == 0:
            highlights.append(next(resume).split('=')[1])
            line = next(resume).strip()
        print 'reached end of job after ' + str(len(highlights))

resume.close()
print (highlights)
