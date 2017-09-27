

def convert_resume(resume_file):

    resume_source = open(resume_file, 'r')
    resume_dest = open('conversion/staging/' + resume_source.name, 'w')

    for line in resume_source:

        # check if we're on a starting point
        if line.find('#startStringArray') != -1:
            # do the pre stuff:
            # 1. move forward a line
            line = next(resume_source)
            # 2. replace 'highlights [0]' with 'highlights [] s = '
            new_line = line.replace('[0]', '[] s = ').replace('\n', ' ')

            # now we have a series of lines to iterate through
            while line.find('#endStringArray') == -1:

                # skip these lines
                if line.find('highlights [') != -1:
                    line = next(resume_source)

                # for these, we take the value after '=', replace commas with the code, take off the newline and append an actual comma
                if line.find('desc = ') != -1:
                    new_line = new_line + line.split(' = ')[1].replace(',', '&#44;').replace('\n', ', ').strip()

                # now move forward a line and repeat the process
                line = next(resume_source)

            # removes the trailing comma
            line = new_line[:-1]

        # write out the line
        resume_dest.write(line)

    resume_source.close()
    resume_dest.close();
    return resume_dest.name


if __name__ == '__main__':
    print('Starting conversion')
    output = convert_resume('resume.txt')
    print('Complete - ' + output + ' has been created')
