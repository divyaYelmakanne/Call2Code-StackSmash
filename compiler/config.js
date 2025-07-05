// Monaco Editor Configuration for StackSmash
const editorConfig = {
    // Language-specific configurations
    languages: {
        javascript: {
            name: 'JavaScript',
            extension: '.js',
            defaultCode: `// JavaScript Example
let name = "StackSmash";
let age = 25;
let isStudent = true;

console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);`
        },
        python: {
            name: 'Python',
            extension: '.py',
            defaultCode: `# Python Example
name = "StackSmash"
age = 25
is_student = True

print("Name:", name)
print("Age:", age)
print("Is Student:", is_student)`
        },
        html: {
            name: 'HTML',
            extension: '.html',
            defaultCode: `<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Hello StackSmash!</h1>
    <p>Welcome to web development.</p>
    <script>
        console.log("Hello from HTML!");
    </script>
</body>
</html>`
        },
        css: {
            name: 'CSS',
            extension: '.css',
            defaultCode: `/* CSS Example */
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 20px;
    background-color: #f0f0f0;
}

.container {
    max-width: 800px;
    margin: 0 auto;
    background: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

h1 {
    color: #333;
    text-align: center;
}`
        },
        java: {
            name: 'Java',
            extension: '.java',
            defaultCode: `public class Main {
    public static void main(String[] args) {
        String name = "StackSmash";
        int age = 25;
        boolean isStudent = true;
        
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Is Student: " + isStudent);
    }
}`
        },
        cpp: {
            name: 'C++',
            extension: '.cpp',
            defaultCode: `#include <iostream>
#include <string>
using namespace std;

int main() {
    string name = "StackSmash";
    int age = 25;
    bool isStudent = true;
    
    cout << "Name: " << name << endl;
    cout << "Age: " << age << endl;
    cout << "Is Student: " << isStudent << endl;
    
    return 0;
}`
        },
        csharp: {
            name: 'C#',
            extension: '.cs',
            defaultCode: `using System;

class Program {
    static void Main() {
        string name = "StackSmash";
        int age = 25;
        bool isStudent = true;
        
        Console.WriteLine("Name: " + name);
        Console.WriteLine("Age: " + age);
        Console.WriteLine("Is Student: " + isStudent);
    }
}`
        },
        php: {
            name: 'PHP',
            extension: '.php',
            defaultCode: `<?php
$name = "StackSmash";
$age = 25;
$isStudent = true;

echo "Name: " . $name . "\n";
echo "Age: " . $age . "\n";
echo "Is Student: " . ($isStudent ? "true" : "false") . "\n";
?>`
        },
        ruby: {
            name: 'Ruby',
            extension: '.rb',
            defaultCode: `# Ruby Example
name = "StackSmash"
age = 25
is_student = true

puts "Name: #{name}"
puts "Age: #{age}"
puts "Is Student: #{is_student}"`
        },
        go: {
            name: 'Go',
            extension: '.go',
            defaultCode: `package main

import "fmt"

func main() {
    name := "StackSmash"
    age := 25
    isStudent := true
    
    fmt.Println("Name:", name)
    fmt.Println("Age:", age)
    fmt.Println("Is Student:", isStudent)
}`
        },
        rust: {
            name: 'Rust',
            extension: '.rs',
            defaultCode: `fn main() {
    let name = "StackSmash";
    let age = 25;
    let is_student = true;
    
    println!("Name: {}", name);
    println!("Age: {}", age);
    println!("Is Student: {}", is_student);
}`
        },
        sql: {
            name: 'SQL',
            extension: '.sql',
            defaultCode: `-- SQL Example
CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(100),
    age INT,
    is_student BOOLEAN
);

INSERT INTO students (id, name, age, is_student) 
VALUES (1, 'StackSmash', 25, true);

SELECT * FROM students;`
        }
    },

    // Editor themes
    themes: {
        'vs': 'Light Theme',
        'vs-dark': 'Dark Theme',
        'hc-black': 'High Contrast'
    },

    // Editor options
    editorOptions: {
        fontSize: 14,
        lineNumbers: 'on',
        minimap: { enabled: false },
        wordWrap: 'on',
        automaticLayout: true,
        scrollBeyondLastLine: false,
        roundedSelection: false,
        cursorStyle: 'line',
        readOnly: false,
        folding: true,
        lineDecorationsWidth: 10,
        lineNumbersMinChars: 3,
        renderLineHighlight: 'all',
        selectOnLineNumbers: true,
        glyphMargin: true,
        useTabStops: false,
        fontSize: 14,
        tabSize: 4,
        insertSpaces: true,
        detectIndentation: true,
        trimAutoWhitespace: true,
        largeFileOptimizations: true,
        contextmenu: true,
        mouseWheelZoom: true,
        quickSuggestions: true,
        quickSuggestionsDelay: 10,
        parameterHints: {
            enabled: true,
            cycle: true
        },
        autoIndent: 'full',
        formatOnPaste: true,
        formatOnType: true,
        suggestOnTriggerCharacters: true,
        acceptSuggestionOnCommitCharacter: true,
        acceptSuggestionOnEnter: 'on',
        wordBasedSuggestions: true,
        suggest: {
            insertMode: 'replace',
            showKeywords: true,
            showSnippets: true,
            showClasses: true,
            showFunctions: true,
            showVariables: true,
            showModules: true,
            showProperties: true,
            showEvents: true,
            showOperators: true,
            showUnits: true,
            showValues: true,
            showConstants: true,
            showEnums: true,
            showEnumMembers: true,
            showColors: true,
            showFiles: true,
            showReferences: true,
            showFolders: true,
            showTypeParameters: true,
            showWords: true,
            showUsers: true,
            showIssues: true
        }
    },

    // Execution settings
    execution: {
        timeout: 5000, // 5 seconds
        maxMemory: '50MB',
        allowedLanguages: ['javascript', 'python', 'html', 'css'],
        sandboxMode: true
    },

    // Challenge settings
    challenges: {
        maxCodeLength: 10000,
        allowedFileTypes: ['.js', '.py', '.html', '.css', '.java', '.cpp', '.cs', '.php', '.rb', '.go', '.rs', '.sql'],
        shareTemplate: "Check out this {language} challenge on StackSmash!\n\nCode:\n{code}\n\nCan you solve it? Join me on StackSmash!"
    }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = editorConfig;
} else {
    window.editorConfig = editorConfig;
} 