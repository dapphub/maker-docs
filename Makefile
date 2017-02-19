index.gen.json.js: $(wildcard *.html)
	for x in *.html; do jshon+=(-s "$$x" -i append); done; \
        echo >$@ "var index = `echo [] | jshon "$${jshon[@]}"`"
