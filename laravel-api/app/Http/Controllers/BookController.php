<?php

namespace App\Http\Controllers;

use App\Book;
use Illuminate\Http\Request;
use Validator;
use Illuminate\Foundation\Validation\ValidatesRequests;

class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $books = Book::all();

        return response()->json($books);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $getrequest = file_get_contents('php://input');
        // $getrequest = $request->getContent();
        // dd($getrequest);
        $ii = json_decode($getrequest, true);
       
        $book = $ii;

        $validator = Validator::make($ii, [
                        'author' => 'required',
                        'description' => 'required',
                    ]);
        if($validator->fails()){
            $allBooks = Book::all();
            return response()->json($allBooks);
        }else{
            $books = Book::create($book);
            $allBooks = Book::all();
            return response()->json($allBooks);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $book = Book::findOrFail($id);

        return response()->json($book);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'author' => 'required',
            'description' => 'required'
        ]);

        $book = Book::findOrFail($id);
        $book->update($data);

        return response()->json($book);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $book = Book::findOrFail($id);
        $book->delete();

        return response()->json($book);
    }
}
