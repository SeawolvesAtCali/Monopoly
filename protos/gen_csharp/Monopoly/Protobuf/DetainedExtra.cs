// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: monopoly/detained_extra.proto
// </auto-generated>
#pragma warning disable 1591, 0612, 3021
#region Designer generated code

using pb = global::Google.Protobuf;
using pbc = global::Google.Protobuf.Collections;
using pbr = global::Google.Protobuf.Reflection;
using scg = global::System.Collections.Generic;
namespace Monopoly.Protobuf {

  /// <summary>Holder for reflection information generated from monopoly/detained_extra.proto</summary>
  public static partial class DetainedExtraReflection {

    #region Descriptor
    /// <summary>File descriptor for monopoly/detained_extra.proto</summary>
    public static pbr::FileDescriptor Descriptor {
      get { return descriptor; }
    }
    private static pbr::FileDescriptor descriptor;

    static DetainedExtraReflection() {
      byte[] descriptorData = global::System.Convert.FromBase64String(
          string.Concat(
            "Ch1tb25vcG9seS9kZXRhaW5lZF9leHRyYS5wcm90bxIIbW9ub3BvbHkihAEK",
            "DURldGFpbmVkRXh0cmESKgoEdHlwZRgBIAEoDjIcLm1vbm9wb2x5LkRldGFp",
            "bmVkRXh0cmEuVHlwZRIOCgZsZW5ndGgYAyABKAUiNwoEVHlwZRIPCgtVTlNQ",
            "RUNJRklFRBAAEgwKCEFSUkVTVEVEEAESEAoMSE9TUElUQUxJWkVEEAJCFKoC",
            "EU1vbm9wb2x5LlByb3RvYnVmYgZwcm90bzM="));
      descriptor = pbr::FileDescriptor.FromGeneratedCode(descriptorData,
          new pbr::FileDescriptor[] { },
          new pbr::GeneratedClrTypeInfo(null, null, new pbr::GeneratedClrTypeInfo[] {
            new pbr::GeneratedClrTypeInfo(typeof(global::Monopoly.Protobuf.DetainedExtra), global::Monopoly.Protobuf.DetainedExtra.Parser, new[]{ "Type", "Length" }, null, new[]{ typeof(global::Monopoly.Protobuf.DetainedExtra.Types.Type) }, null, null)
          }));
    }
    #endregion

  }
  #region Messages
  public sealed partial class DetainedExtra : pb::IMessage<DetainedExtra>
  #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      , pb::IBufferMessage
  #endif
  {
    private static readonly pb::MessageParser<DetainedExtra> _parser = new pb::MessageParser<DetainedExtra>(() => new DetainedExtra());
    private pb::UnknownFieldSet _unknownFields;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pb::MessageParser<DetainedExtra> Parser { get { return _parser; } }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static pbr::MessageDescriptor Descriptor {
      get { return global::Monopoly.Protobuf.DetainedExtraReflection.Descriptor.MessageTypes[0]; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    pbr::MessageDescriptor pb::IMessage.Descriptor {
      get { return Descriptor; }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public DetainedExtra() {
      OnConstruction();
    }

    partial void OnConstruction();

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public DetainedExtra(DetainedExtra other) : this() {
      type_ = other.type_;
      length_ = other.length_;
      _unknownFields = pb::UnknownFieldSet.Clone(other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public DetainedExtra Clone() {
      return new DetainedExtra(this);
    }

    /// <summary>Field number for the "type" field.</summary>
    public const int TypeFieldNumber = 1;
    private global::Monopoly.Protobuf.DetainedExtra.Types.Type type_ = global::Monopoly.Protobuf.DetainedExtra.Types.Type.Unspecified;
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public global::Monopoly.Protobuf.DetainedExtra.Types.Type Type {
      get { return type_; }
      set {
        type_ = value;
      }
    }

    /// <summary>Field number for the "length" field.</summary>
    public const int LengthFieldNumber = 3;
    private int length_;
    /// <summary>
    /// How long show the player stay.
    /// </summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int Length {
      get { return length_; }
      set {
        length_ = value;
      }
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override bool Equals(object other) {
      return Equals(other as DetainedExtra);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public bool Equals(DetainedExtra other) {
      if (ReferenceEquals(other, null)) {
        return false;
      }
      if (ReferenceEquals(other, this)) {
        return true;
      }
      if (Type != other.Type) return false;
      if (Length != other.Length) return false;
      return Equals(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override int GetHashCode() {
      int hash = 1;
      if (Type != global::Monopoly.Protobuf.DetainedExtra.Types.Type.Unspecified) hash ^= Type.GetHashCode();
      if (Length != 0) hash ^= Length.GetHashCode();
      if (_unknownFields != null) {
        hash ^= _unknownFields.GetHashCode();
      }
      return hash;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public override string ToString() {
      return pb::JsonFormatter.ToDiagnosticString(this);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void WriteTo(pb::CodedOutputStream output) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      output.WriteRawMessage(this);
    #else
      if (Type != global::Monopoly.Protobuf.DetainedExtra.Types.Type.Unspecified) {
        output.WriteRawTag(8);
        output.WriteEnum((int) Type);
      }
      if (Length != 0) {
        output.WriteRawTag(24);
        output.WriteInt32(Length);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(output);
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalWriteTo(ref pb::WriteContext output) {
      if (Type != global::Monopoly.Protobuf.DetainedExtra.Types.Type.Unspecified) {
        output.WriteRawTag(8);
        output.WriteEnum((int) Type);
      }
      if (Length != 0) {
        output.WriteRawTag(24);
        output.WriteInt32(Length);
      }
      if (_unknownFields != null) {
        _unknownFields.WriteTo(ref output);
      }
    }
    #endif

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public int CalculateSize() {
      int size = 0;
      if (Type != global::Monopoly.Protobuf.DetainedExtra.Types.Type.Unspecified) {
        size += 1 + pb::CodedOutputStream.ComputeEnumSize((int) Type);
      }
      if (Length != 0) {
        size += 1 + pb::CodedOutputStream.ComputeInt32Size(Length);
      }
      if (_unknownFields != null) {
        size += _unknownFields.CalculateSize();
      }
      return size;
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(DetainedExtra other) {
      if (other == null) {
        return;
      }
      if (other.Type != global::Monopoly.Protobuf.DetainedExtra.Types.Type.Unspecified) {
        Type = other.Type;
      }
      if (other.Length != 0) {
        Length = other.Length;
      }
      _unknownFields = pb::UnknownFieldSet.MergeFrom(_unknownFields, other._unknownFields);
    }

    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public void MergeFrom(pb::CodedInputStream input) {
    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
      input.ReadRawMessage(this);
    #else
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, input);
            break;
          case 8: {
            Type = (global::Monopoly.Protobuf.DetainedExtra.Types.Type) input.ReadEnum();
            break;
          }
          case 24: {
            Length = input.ReadInt32();
            break;
          }
        }
      }
    #endif
    }

    #if !GOOGLE_PROTOBUF_REFSTRUCT_COMPATIBILITY_MODE
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    void pb::IBufferMessage.InternalMergeFrom(ref pb::ParseContext input) {
      uint tag;
      while ((tag = input.ReadTag()) != 0) {
        switch(tag) {
          default:
            _unknownFields = pb::UnknownFieldSet.MergeFieldFrom(_unknownFields, ref input);
            break;
          case 8: {
            Type = (global::Monopoly.Protobuf.DetainedExtra.Types.Type) input.ReadEnum();
            break;
          }
          case 24: {
            Length = input.ReadInt32();
            break;
          }
        }
      }
    }
    #endif

    #region Nested types
    /// <summary>Container for nested types declared in the DetainedExtra message type.</summary>
    [global::System.Diagnostics.DebuggerNonUserCodeAttribute]
    public static partial class Types {
      public enum Type {
        [pbr::OriginalName("UNSPECIFIED")] Unspecified = 0,
        [pbr::OriginalName("ARRESTED")] Arrested = 1,
        [pbr::OriginalName("HOSPITALIZED")] Hospitalized = 2,
      }

    }
    #endregion

  }

  #endregion

}

#endregion Designer generated code
