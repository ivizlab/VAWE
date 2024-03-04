#!/usr/bin/python

import sys

from pylab import *
from scipy.interpolate import griddata
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d import Axes3D
import numpy as np

def getQuad(theta, i):
	# get quadrand 
	th_bins = 20 # since 4 quadrants x 5 states
	th_boundary = np.linspace(0, 2 * np.pi, th_bins+1)
	hist, edge =  np.histogram(theta, th_boundary)
	quad = int( np.dot(hist,np.linspace(1, th_bins, th_bins)) )

	# get quadrand 
	i_bins = 5 # 
	i_boundary = np.linspace(0, 100, i_bins+1)
	# print i_boundary
	hist, edge =  np.histogram(i, i_boundary)
	val = int( np.dot(hist,np.linspace(1, i_bins, i_bins)) )
	#print val

	return (quad+th_bins*(val-1))


# function to lookup saved .csv file 
def lookup2(i):
	return csv_doc[i][1]

############ MAIN FUNCTION ####################  
if __name__ == "__main__":

	# read .csv file
	# must be passed when program is called
	try:
		csvName = sys.argv[1]
		csvAddress = 'csv/'
		csvAddress += str(csvName)
		csvAddress += '.csv'

		saveName = sys.argv[1]
		saveAddress = 'figures/' + str(saveName)
		saveAddress += '.png'
	except:
		print 'need to pass name of a .csv file locates in csv folder'

	if (len(sys.argv) > 2):
		saveName = sys.argv[2]
		saveAddress = 'figures/' + str(saveName)
		saveAddress += '.png'
		print str(saveName)

	# define home directory where csv files are located
	csv_doc = genfromtxt(str(csvAddress),delimiter=',')


	# setup figure  	
	fig = plt.figure()
	ax = Axes3D(fig)

	# setup polar grid
	rad = np.linspace(0, 100, 100) # 0-100, 100 interval lines
	azm = np.linspace(0, 2 * np.pi, 21) # 0-2pi, 21 interval lines
	r, th = np.meshgrid(rad, azm) # get 2D mesh of radial and angular coordinates

	# initialise variable to store freq data
	z = (r * 0) +1

	# print len(z) # will equal 21
	# print len(z[0]) # will equal 100

	# fill 'z' with freq info
	# cycle through each slice in circle
	for i in range(len(z)):
		# start in centre, move out radially
		for j in range (len(z[i])):
			val = getQuad(th[i][j], r[i][j]) # return index for emotions
			#print val
			z[i][j] = lookup2(val-1)

	plt.subplot(projection="polar")

	# see http://matplotlib.org/examples/color/colormaps_reference.html
	plt.pcolormesh(th, r, z, cmap='Greys')
	#plt.pcolormesh(th, z, r)

	plt.plot(azm, r, color='k', ls='none') 
	plt.grid()

	plt.savefig(saveAddress)

	if (len(sys.argv) > 3):
		plt.show()
