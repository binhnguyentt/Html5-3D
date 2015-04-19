"use strict";

function Mat4() {
    this.m = [];

    for (var i=0; i<4; i++) {
        var arr = [];

        for (var j=0; j<4; ++j) {
            arr.push(0);
        }

        this.m.push(arr);
    }

    this.mulMatrix = function(matrix) {
        var rs = new Mat4();

        for (var i=0; i<4; i++) {
            for (var j=0; j<4; j++) {
                var sum  = 0;
                
                for (var k=0; k<4; ++k) {
                    sum += this.m[i][k] * matrix.m[k][j];
                }

                rs.m[i][j] = sum;
            }
        }
        
        return rs;
    }

    this.mulVector = function(vector) {
        var x = 0;
        var y = 0;
        var z = 0;
        var w = 0;
        
        x = vector.x * this.m[0][0] + 
            vector.y * this.m[1][0] +
            vector.z * this.m[2][0] +
            vector.w * this.m[3][0];
        
        y = vector.x * this.m[0][1] + 
            vector.y * this.m[1][1] +
            vector.z * this.m[2][1] +
            vector.w * this.m[3][1];
        
        z = vector.x * this.m[0][2] + 
            vector.y * this.m[1][2] +
            vector.z * this.m[2][2] +
            vector.w * this.m[3][2];
        
        w = vector.x * this.m[0][3] + 
            vector.y * this.m[1][3] +
            vector.z * this.m[2][3] +
            vector.w * this.m[3][3];
        
        return new Vec4(x, y, z, w);
    }
    
    this.mulFloat = function(f) {
        var rs = new Mat4();
        
        for (var i=0; i<4; i++) {
            for (var j=0; j<4; ++j) {
                rs.m[i][j] = this.m[i][j] * f;
            }
        }
        
        return rs;
    }
    
    this.transpose = function() {
        var rs = new Mat4();
        
        for (var i=0; i<4; ++i) {
            for (var j=0; j<4; j++) {
                rs.m[j][i] = this.m[i][j];
            }
        }
        
        return rs;
    }
    
    this.setIdentity = function() {
        this.m[0][0] = 1;
        this.m[1][1] = 1;
        this.m[2][2] = 1;
        this.m[3][3] = 1;
    }
    
    this.setRotateX = function(angle) {
        var c = Math.cos(angle);
        var s = Math.sin(angle);
        
        this.m[0][0] = 1;
        this.m[0][1] = 0;
        this.m[0][2] = 0;
        this.m[0][3] = 0;
        
        this.m[1][0] = 0;
        this.m[1][1] = c;
        this.m[1][2] = -s;
        this.m[1][3] = 0;
        
        this.m[2][0] = 0;
        this.m[2][1] = s;
        this.m[2][2] = c;
        this.m[2][3] = 0;
        
        this.m[3][0] = 0;
        this.m[3][1] = 0;
        this.m[3][2] = 0;
        this.m[3][3] = 1;
    }
    
    this.setRotateY = function(angle) {
        var c = Math.cos(angle);
        var s = Math.sin(angle);
        
        this.m[0][0] = c;
        this.m[0][1] = 0;
        this.m[0][2] = s;
        this.m[0][3] = 0;
        
        this.m[1][0] = 0;
        this.m[1][1] = 1;
        this.m[1][2] = 0;
        this.m[1][3] = 0;
        
        this.m[2][0] = -s;
        this.m[2][1] = 0;
        this.m[2][2] = c;
        this.m[2][3] = 0;
        
        this.m[3][0] = 0;
        this.m[3][1] = 0;
        this.m[3][2] = 0;
        this.m[3][3] = 1;
    }
    
    this.setRotateZ = function(angle) {
        var c = Math.cos(angle);
        var s = Math.sin(angle);
        
        this.m[0][0] = c;
        this.m[0][1] = -s;
        this.m[0][2] = 0;
        this.m[0][3] = 0;
        
        this.m[1][0] = s;
        this.m[1][1] = c;
        this.m[1][2] = 0;
        this.m[1][3] = 0;
        
        this.m[2][0] = 0;
        this.m[2][1] = 0;
        this.m[2][2] = 1;
        this.m[2][3] = 0;
        
        this.m[3][0] = 0;
        this.m[3][1] = 0;
        this.m[3][2] = 0;
        this.m[3][3] = 1;
    }
    
    this.add = function(mat) {
        var rs = new Mat4();
        
        for (var i=0; i<4; i++) {
            for (var j=0; j<4; j++) {
                rs.m[i][j] = this.m[i][j] + mat.m[i][j];
            }
        }
        
        return rs;
    }
    
    this.sub = function(mat) {
        var rs = new Mat4();
        
        for (var i=0; i<4; i++) {
            for (var j=0; j<4; j++) {
                rs.m[i][j] = this.m[i][j] - mat.m[i][j];
            }
        }
        
        return rs;
    }
    
    this.toString = function() {
        var str = '';
        for (var i=0; i<4; ++i) {
            for (var j=0; j<4; ++j) {
                str = str + this.m[i][j] + ' ';
            }
            
            str += '\n';
        }
        
        return '--- Mat4 ---\n' + str + '------------';
            
    }
}