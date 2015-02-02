/**
 * @name qiita_team_templates.js
 * @version 0.1.0
 *
 * Qiita.TeamTemplates is initialized as follows:
 *
 *   Qiita.TeamTemplates = {
 *       // Registered functions.
 *       _map: {},
 *       // Queued selectors.
 *       _queues: {},
 *       // Whether the name has already been registered or not.
 *       isRegistered = function (name) {
 *           return name in this._map;
 *       },
 *       // Register the function as the name.
 *       register: function (name, func) {
 *           this._map[name] = func;
 *       },
 *       // Push the selector to a queue to render when corresponding
 *       // template is registered.
 *       render: function (name, selector) {
 *           this._queues[name] || (this._queues[name] = []);
 *           this._queues[name].push(selector);
 *       }
 *   }
 */

(function (global) {
    'use strict';

    // Namespace.
    var ns = global.Qiita.TeamTemplates;

    // Override
    ns.register = function (name, func) {
        ns._map[name] = func;
        if (ns._queues[name]) {
            // Render queued selectors.
            ns.run(name);
            // Clear queue.
            ns._queues[name] = null;
        }
    };

    // Override
    ns.render = function (name, selector) {
        if (ns.isRegistered(name)) {
            ns._map[name](selector);
        } else {
            // If the named template has not been registered, push the selector to
            // the corresponding queue.
            ns._queues[name] || (ns._queues[name] = []);
            ns._queues[name].push(selector);
        }
    };

    ns.run = function (name) {
        if (!ns._queues[name]) { return; }
        for (var i = 0, l = ns._queues[name].length; i < l; i++) {
            ns.render(name, ns._queues[name][i]);
        }
    };

    // Run for preregisted templates.
    for (var name in ns._map) if (ns._map.hasOwnProperty(name)) {
        ns.run(name);
    }
})(this);
