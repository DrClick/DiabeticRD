#Generate Null Model for diabetic retionpathy competition https://www.kaggle.com/c/diabetic-retinopathy-detection
content = [];
with open('sampleSubmission.csv') as f:
    content = f.readlines();


print 'image,level'


for i in range(len(content)):
	key_val = string.split(content[i],',')
	print '{0},{1}'.format(key_val(1), Math.round(Math.random() * 4))
