.PHONY: clean html jst js

default: index.html

clean:
	rm -fr dist
	rm index.html

html:
	rake make

jst:
	gulp jst

js: jst
	gulp template:kpt
	gulp template:lean_canvas
	gulp template:problem_solution_canvas

index.html: js html
	gulp template:html
