$ports = @(8000, 8080, 8081, 3000, 5000)
$started = $false

foreach ($p in $ports) {
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://localhost:$p/")
    try {
        $listener.Start()
        Write-Host "Multi-Page Portfolio server actively listening on http://localhost:$p/"
        $started = $true
        
        while ($listener.IsListening) {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response
            
            $localPath = $request.Url.LocalPath
            if ($localPath -eq '/') { $localPath = '/index.html' }
            
            $filePath = Join-Path "c:\Users\preet\OneDrive\Documents\first\portfolio" $localPath.TrimStart('/')
            
            if (Test-Path $filePath -PathType Leaf) {
                $bytes = [System.IO.File]::ReadAllBytes($filePath)
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                switch ($ext) {
                    ".html" { $contentType = "text/html; charset=utf-8" }
                    ".css"  { $contentType = "text/css; charset=utf-8" }
                    ".js"   { $contentType = "text/javascript; charset=utf-8" }
                    ".jpg"  { $contentType = "image/jpeg" }
                    ".jpeg" { $contentType = "image/jpeg" }
                    ".png"  { $contentType = "image/png" }
                    ".svg"  { $contentType = "image/svg+xml" }
                    Default { $contentType = "application/octet-stream" }
                }
                $response.ContentType = $contentType
                $response.ContentLength64 = $bytes.Length
                $response.OutputStream.Write($bytes, 0, $bytes.Length)
            } else {
                $response.StatusCode = 404
                $buffer = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
                $response.OutputStream.Write($buffer, 0, $buffer.Length)
            }
            $response.Close()
        }
        break
    } catch {
        $listener.Close()
    }
}

if (-not $started) {
    Write-Host "Could not start server on any default port."
}
