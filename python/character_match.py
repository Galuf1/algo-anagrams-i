# Don't forget to run your tests!

from operator import is_
import string


def is_character_match(string1, string2):
	list1 = list(string1.lower())
	list2 = list(string2.lower())
	for i,j in enumerate(list1):
		try:
			index = list2.index(j)
		except: return False
		if j == list2[index]:
			list2.remove(list2[index])
			continue
		else:
			return False
	return True

	



is_character_match('charm', 'march')