goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.array', 'goog.object', 'goog.string.StringBuffer']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['cljs.core', 'goog.string', 'goog.string.StringBuffer']);
goog.addDependency("../embodier/fileapi.js", ['embodier.fileapi'], ['cljs.core', 'clojure.string']);
goog.addDependency("../reagent/debug.js", ['reagent.debug'], ['cljs.core']);
goog.addDependency("../reagent/impl/reactimport.js", ['reagent.impl.reactimport'], ['cljs.core']);
goog.addDependency("../reagent/impl/util.js", ['reagent.impl.util'], ['cljs.core', 'reagent.debug', 'clojure.string', 'reagent.impl.reactimport']);
goog.addDependency("../reagent/ratom.js", ['reagent.ratom'], ['cljs.core']);
goog.addDependency("../reagent/impl/batching.js", ['reagent.impl.batching'], ['cljs.core', 'reagent.debug', 'clojure.string', 'reagent.impl.util', 'reagent.ratom']);
goog.addDependency("../reagent/impl/component.js", ['reagent.impl.component'], ['cljs.core', 'reagent.debug', 'reagent.impl.util', 'reagent.impl.batching', 'reagent.ratom']);
goog.addDependency("../reagent/impl/template.js", ['reagent.impl.template'], ['cljs.core', 'reagent.debug', 'clojure.string', 'reagent.impl.component', 'reagent.impl.util', 'reagent.impl.batching', 'reagent.ratom']);
goog.addDependency("../reagent/core.js", ['reagent.core'], ['reagent.impl.template', 'cljs.core', 'reagent.impl.component', 'reagent.impl.util', 'reagent.impl.batching', 'reagent.ratom']);
goog.addDependency("../embodier/webcomponents.js", ['embodier.webcomponents'], ['cljs.core', 'embodier.fileapi', 'reagent.core']);
goog.addDependency("../clojure/walk.js", ['clojure.walk'], ['cljs.core']);
goog.addDependency("../secretary/core.js", ['secretary.core'], ['cljs.core', 'clojure.walk', 'clojure.string']);
goog.addDependency("../embodier/core.js", ['embodier.core'], ['goog.history.EventType', 'embodier.webcomponents', 'cljs.core', 'secretary.core', 'goog.History', 'reagent.core', 'goog.events']);