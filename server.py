import http.server
import socketserver
import os

PORT = 5500
os.chdir(os.path.dirname(os.path.abspath(__file__)))

class ExclusiveThreadingHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True
    allow_reuse_address = False

handler = http.server.SimpleHTTPRequestHandler
with ExclusiveThreadingHTTPServer(("127.0.0.1", PORT), handler) as httpd:
    print(f"Serving cleanly on http://127.0.0.1:{PORT}", flush=True)
    httpd.serve_forever()
