// Compiled by ClojureScript 0.0-2173
goog.provide('embodier.core');
goog.require('cljs.core');
goog.require('embodier.webcomponents');
goog.require('goog.History');
goog.require('goog.events');
goog.require('secretary.core');
goog.require('embodier.canvasdraw');
goog.require('reagent.core');
goog.require('reagent.core');
goog.require('goog.history.EventType');
goog.require('embodier.canvasdraw');
goog.require('embodier.webcomponents');
goog.require('goog.events');
goog.require('secretary.core');
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [embodier.webcomponents.app], null),document.body);
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",4328760836),"#");
var action__4844__auto___5361 = (function (params__4845__auto__){if(cljs.core.map_QMARK_.call(null,params__4845__auto__))
{var map__5359 = params__4845__auto__;var map__5359__$1 = ((cljs.core.seq_QMARK_.call(null,map__5359))?cljs.core.apply.call(null,cljs.core.hash_map,map__5359):map__5359);return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"gcode-file","gcode-file",1074236487),true));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4845__auto__))
{var vec__5360 = params__4845__auto__;return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"gcode-file","gcode-file",1074236487),true));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/gcode",action__4844__auto___5361);
/**
* @param {...*} var_args
*/
embodier.core.upload = (function() { 
var upload__delegate = function (args__4843__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/gcode",args__4843__auto__);
};
var upload = function (var_args){
var args__4843__auto__ = null;if (arguments.length > 0) {
  args__4843__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return upload__delegate.call(this,args__4843__auto__);};
upload.cljs$lang$maxFixedArity = 0;
upload.cljs$lang$applyTo = (function (arglist__5362){
var args__4843__auto__ = cljs.core.seq(arglist__5362);
return upload__delegate(args__4843__auto__);
});
upload.cljs$core$IFn$_invoke$arity$variadic = upload__delegate;
return upload;
})()
;
var action__4844__auto___5365 = (function (params__4845__auto__){if(cljs.core.map_QMARK_.call(null,params__4845__auto__))
{var map__5363 = params__4845__auto__;var map__5363__$1 = ((cljs.core.seq_QMARK_.call(null,map__5363))?cljs.core.apply.call(null,cljs.core.hash_map,map__5363):map__5363);return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"layer-view","layer-view",920003859),true));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4845__auto__))
{var vec__5364 = params__4845__auto__;return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"layer-view","layer-view",920003859),true));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/layers",action__4844__auto___5365);
/**
* @param {...*} var_args
*/
embodier.core.layers = (function() { 
var layers__delegate = function (args__4843__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/layers",args__4843__auto__);
};
var layers = function (var_args){
var args__4843__auto__ = null;if (arguments.length > 0) {
  args__4843__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return layers__delegate.call(this,args__4843__auto__);};
layers.cljs$lang$maxFixedArity = 0;
layers.cljs$lang$applyTo = (function (arglist__5366){
var args__4843__auto__ = cljs.core.seq(arglist__5366);
return layers__delegate(args__4843__auto__);
});
layers.cljs$core$IFn$_invoke$arity$variadic = layers__delegate;
return layers;
})()
;
var action__4844__auto___5369 = (function (params__4845__auto__){if(cljs.core.map_QMARK_.call(null,params__4845__auto__))
{var map__5367 = params__4845__auto__;var map__5367__$1 = ((cljs.core.seq_QMARK_.call(null,map__5367))?cljs.core.apply.call(null,cljs.core.hash_map,map__5367):map__5367);return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"gcode-file","gcode-file",1074236487),true));
} else
{if(cljs.core.vector_QMARK_.call(null,params__4845__auto__))
{var vec__5368 = params__4845__auto__;return cljs.core.reset_BANG_.call(null,embodier.webcomponents.routes,cljs.core.assoc.call(null,embodier.webcomponents.default$,new cljs.core.Keyword(null,"gcode-file","gcode-file",1074236487),true));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/",action__4844__auto___5369);
embodier.core.history = (new goog.History());
goog.events.listen(embodier.core.history,goog.history.EventType.NAVIGATE,(function (e){return secretary.core.dispatch_BANG_.call(null,e.token);
}));
embodier.core.history.setEnabled(true);

//# sourceMappingURL=core.js.map