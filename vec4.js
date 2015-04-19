function Vec4(x, y, z, w) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.w = w;

    this.add = function(v) {
        var _x = this.x + v.x;
        var _y = this.y + v.y;
        var _z = this.z + v.z;
        var _w = this.w + v.w;

        return new Vec4(_x, _y, _z, _w);
    }

    this.sub = function(v) {
        var _x = this.x - v.x;
        var _y = this.y - v.y;
        var _z = this.z - v.z;
        var _w = this.w - v.w;

        return new Vec4(_x, _y, _z, _w);
    }

    this.mul = function(f) {
        var _x = this.x * f;
        var _y = this.y * f;
        var _z = this.z * f;
        var _w = this.w * f;

        return new Vec4(_x, _y, _z, _w);
    }

    this.length = function() {
        var sqr = this.x * this.x + 
            this.y * this.y + 
            this.z * this.z +
            this.w * this.w;

        return Math.sqrt(sqr);
    }

    this.normalize = function() {
        var len = this.length();
        var _x = this.x / len;
        var _y = this.y / len;
        var _z = this.z / len;
        var _w = this.w / len;

        return new Vec4(_x, _y, _z, _w);
    }
    
    this.toString = function() {
        return 'Vec4(' + this.x + ', ' + this.y + ', ' + this.z + ', ' + this.w + ')';
    }
}