#include <stdio.h>
int main(){
	int i=4;
	int a = i++;
	int b = i;
	int c = ++i;
	printf("%d %d %d\n", a, b, c);
}
