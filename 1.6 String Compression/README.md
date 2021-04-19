# 1.6 String Compression

Implement a method to perform basic string compression using the counts of repeated characters. For example, the string *aabccccaaa* would become *a2b1c4a3*. If the "compressed" string would not become smaller than the original string, your method should return the original string. You can assume the string has only uppercase and lowercase characters (a-z).

## Assumptions
- Uppercase and lowercase characters are distinct. For example, aaAAA should return 2a3A
- An empty string input should return an empty string
- The string does not contain any spaces, numbers, or special characters
- If the compressed string is equal in length to the original string, return the original string
- The string input length has a reasonable upper bound